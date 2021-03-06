import React from 'react'
import { useRef, onMounted } from 'veact'
import { Form, Input, Button, Select, Spin, Card, Space, Statistic } from 'antd'
import * as Icon from '@ant-design/icons'
import { UniversalEditor, UEditorLanguage } from '@/components/common/UniversalEditor/lazy'
import { FormDataKeyValue } from '@/components/common/FormDataKeyValue'
import { Option } from '@/constants/option'
import { useLoading } from 'veact-use'
import { scrollTo } from '@/services/scroller'
import { getOption, putOption } from '@/store/system'
import { formatJSONString } from '@/transforms/json'
import styles from './style.module.less'

export interface BaseFormProps {
  labelSpan: number
  wrapperSpan: number
}

export const BaseForm: React.FC<BaseFormProps> = (props) => {
  const loading = useLoading()
  const submitting = useLoading()
  const data = useRef<Option | null>(null)
  const [form] = Form.useForm<Option>()
  const resetDataForm = (option: Option) => {
    data.value = option
    form.setFieldsValue({
      ...option,
      ad_config: formatJSONString(option.ad_config, 2),
    })
  }

  const fetchOption = () => {
    return loading.promise(getOption()).then(resetDataForm)
  }

  const updateOption = (newOption: Option) => {
    return submitting
      .promise(
        putOption({
          ...newOption,
          ad_config: formatJSONString(newOption.ad_config),
        })
      )
      .then(resetDataForm)
  }

  const handleSubmit = () => {
    form.validateFields().then((newOption) => {
      updateOption({
        ...data.value,
        ...newOption,
      }).then(() => {
        scrollTo(document.body)
      })
    })
  }

  onMounted(() => {
    fetchOption()
  })

  return (
    <Spin spinning={loading.state.value || submitting.state.value}>
      <Form
        colon={false}
        scrollToFirstError={true}
        className={styles.form}
        form={form}
        labelCol={{ span: props.labelSpan }}
        wrapperCol={{ span: props.wrapperSpan }}
      >
        <Form.Item label=" ">
          <Card size="small">
            <Statistic
              value={data.value?.meta.likes}
              suffix="???"
              title={
                <Space size="small">
                  ?????????????????????
                  <Icon.HeartOutlined />
                </Space>
              }
            />
          </Card>
        </Form.Item>
        <Form.Item name="title" label="????????????" required={true}>
          <Input placeholder="????????????" />
        </Form.Item>
        <Form.Item name="sub_title" label="?????????" required={true}>
          <Input placeholder="?????????" />
        </Form.Item>
        <Form.Item name="description" label="????????????" required={true}>
          <Input.TextArea rows={4} placeholder="????????????" />
        </Form.Item>
        <Form.Item name="keywords" label="?????????" required={true}>
          <Select placeholder="????????????????????????" mode="tags" />
        </Form.Item>
        <Form.Item
          name="site_url"
          label="????????????"
          required={true}
          rules={[
            {
              message: '?????????',
              required: true,
            },
            {
              message: '?????????????????? URL',
              type: 'url',
            },
          ]}
        >
          <Input suffix={<Icon.LinkOutlined />} placeholder="https://example.me" />
        </Form.Item>
        <Form.Item
          name="site_email"
          label="????????????"
          required={true}
          rules={[
            {
              message: '?????????',
              required: true,
            },
            {
              message: '??????????????????????????????',
              type: 'email',
            },
          ]}
        >
          <Input suffix={<Icon.MailOutlined />} placeholder="example@xxx.me" />
        </Form.Item>
        <Form.Item name="statement" label="????????????">
          <UniversalEditor
            minRows={10}
            maxRows={30}
            eid="app-statement"
            defaultLanguage={UEditorLanguage.Markdown}
            disabledMinimap={true}
            disabledCacheDraft={true}
            placeholder="?????? Markdown ????????????????????????"
          />
        </Form.Item>
        <Form.Item label="????????????" extra="Name ????????????Value ???????????????" shouldUpdate={true}>
          <FormDataKeyValue fieldName="friend_links" />
        </Form.Item>
        <Form.Item
          name={['blocklist', 'ips']}
          label="Blocklist IP"
          extra="?????? IP ???????????????????????????"
        >
          <Select placeholder="????????????????????? IP ??????" mode="tags" />
        </Form.Item>
        <Form.Item
          name={['blocklist', 'mails']}
          label="Blocklist ??????"
          extra="???????????????????????????????????????"
        >
          <Select placeholder="???????????????????????????" mode="tags" />
        </Form.Item>
        <Form.Item
          name={['blocklist', 'keywords']}
          label="Blocklist ?????????"
          extra="?????????????????????????????????????????????"
        >
          <Select placeholder="??????????????????????????????" mode="tags" />
        </Form.Item>
        <Form.Item
          name="ad_config"
          label="AD CONFIG"
          rules={[
            {
              message: '?????????????????? JSON ??????',
              validator(_, value) {
                try {
                  formatJSONString(value || '')
                  return Promise.resolve()
                } catch (error) {
                  return Promise.reject(error)
                }
              },
            },
          ]}
        >
          <UniversalEditor
            minRows={22}
            maxRows={30}
            eid="app-ad-config"
            defaultLanguage={UEditorLanguage.JSON}
            disabledCacheDraft={true}
            placeholder="?????????????????????JSON ??????"
          />
        </Form.Item>
        <Form.Item label=" ">
          <Button
            icon={<Icon.CheckOutlined />}
            type="primary"
            loading={submitting.state.value}
            onClick={handleSubmit}
          >
            ??????
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}
