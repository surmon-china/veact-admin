/**
 * @file Category store
 * @author Surmon <https://github.com/surmon-china>
 */

import { arrayToTree } from 'performant-array-to-tree'
import { TreeDataNode } from 'antd'

import nodepress from '@/services/nodepress'
import { Category } from '@/constants/category'
import { ResponsePaginationData, GeneralPaginateQueryParams } from '@/constants/request'

export const CATEGORY_API_PATH = '/category'

export interface CategoryTree extends Category {
  children?: Array<CategoryTree>
}

/** 获取分类列表 */
export function getCategories(params: GeneralPaginateQueryParams = {}) {
  return nodepress
    .get<ResponsePaginationData<Category>>(CATEGORY_API_PATH, { params })
    .then((response) => ({
      ...response.result,
      tree: arrayToTree(response.result.data, {
        id: '_id',
        parentId: 'pid',
        childrenField: 'children',
        dataField: null
      }) as Array<CategoryTree>
    }))
}

/** 获取符合 Antd 的分类树 */
export function getAntdTreeByTree({
  tree,
  valuer,
  disabledWhen
}: {
  tree: Array<CategoryTree>
  valuer(category: Category): any
  disabledWhen?(category: Category): boolean
}) {
  const toAntdTree = (_tree: Array<CategoryTree>): TreeDataNode[] => {
    return _tree.map((category) => ({
      data: category,
      title: category.name,
      key: valuer(category),
      value: valuer(category),
      disabled: disabledWhen?.(category) ?? false,
      children: toAntdTree(category.children || [])
    }))
  }
  return toAntdTree(tree)
}

/** 创建分类 */
export function createCategory(category: Category) {
  return nodepress.post(CATEGORY_API_PATH, category).then((response) => response.result)
}

/** 修改分类 */
export function putCategory(category: Category) {
  return nodepress
    .put(`${CATEGORY_API_PATH}/${category._id}`, category)
    .then((response) => response.result)
}

/** 删除分类 */
export function deleteCategory(categoryId: string) {
  return nodepress
    .delete(`${CATEGORY_API_PATH}/${categoryId}`)
    .then((response) => response.result)
}

/** 批量删除分类 */
export function deleteCategories(categoriesIds: string[]) {
  return nodepress
    .delete(CATEGORY_API_PATH, { data: { categorie_ids: categoriesIds } })
    .then((response) => response.result)
}
