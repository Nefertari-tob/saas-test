export const schema = {
  form: {
    labelCol: 6,
    wrapperCol: 24,
    colon: false,
    feedbackLayout: "loose",
    size: "default",
    layout: "horizontal",
    tooltipLayout: "icon",
    labelAlign: "right",
    wrapperAlign: "left",
    shallow: true,
    bordered: true,
    style: {
      opacity: 1,
    },
  },
  schema: {
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "name",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-display": "visible",
        "x-pattern": "editable",
        "x-validator": [
          {
            triggerType: "onInput",
            format: "zh",
            message: "姓名格数错误",
          },
        ],
        "x-component-props": {
          size: "default",
          placeholder: "",
        },
        "x-resource-group-name": "name",
        "x-resource-group-title": "name",
        name: "name",
        description: "name",
        required: true,
        "x-decorator-props": {
          tooltip: "请输入姓名",
        },
        "x-designable-id": "3g0rj5nqt4f",
        "x-index": 0,
      },
    },
    "x-designable-id": "ec3vfg665fk",
  },
};
