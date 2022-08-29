export const schema = {
  "form": {
    "labelCol": 6,
    "wrapperCol": 7,
    "colon": false,
    "feedbackLayout": "loose",
    "size": "default",
    "layout": "horizontal",
    "tooltipLayout": "icon",
    "labelAlign": "right",
    "wrapperAlign": "left",
    "shallow": false,
    "bordered": true,
    "style": {
      "opacity": 1,
      "width": "1100px",
      "borderStyle": "solid",
      "borderWidth": "1px",
      "border": "1",
      "borderColor": "#181717",
      "backgroundColor": "#FFFFFF",
      "padding": "20px 0px 0px 0px",
      "borderRadius": "10px 10px 10px 10px",
      "margin": "20px 0px 20px 0px"
    },
    "inset": false,
    "fullness": false,
    "wrapperWidth": "1100px",
    "labelWidth": "0px",
    "wrapperWrap": false
  },
  "schema": {
    "type": "object",
    "properties": {
      "uvdu2qstghd": {
        "type": "void",
        "x-component": "FormLayout",
        "x-display": "visible",
        "x-pattern": "editable",
        "x-component-props": {
          "layout": "horizontal",
          "labelAlign": "right",
          "wrapperAlign": "left",
          "tooltipLayout": "icon",
          "labelWrap": false,
          "wrapperWrap": false,
          "fullness": false,
          "inset": false,
          "shallow": false,
          "bordered": true,
          "labelWidth": "inherit",
          "wrapperWidth": "1100px"
        },
        "x-designable-id": "uvdu2qstghd",
        "x-index": 0,
        "properties": {
          "hup8b9onsrl": {
            "type": "void",
            "x-component": "Space",
            "x-display": "visible",
            "x-pattern": "editable",
            "x-component-props": {},
            "x-designable-id": "hup8b9onsrl",
            "x-index": 0,
            "properties": {
              "idCard": {
                "type": "string",
                "title": "身份证号",
                "x-decorator": "FormItem",
                "x-component": "Input",
                "x-display": "visible",
                "x-pattern": "editable",
                "x-validator": [
                  {
                    "triggerType": "onBlur",
                    "format": "idcard",
                    "message": "身份证格式错误",
                    "required": true,
                    "whitespace": true
                  }
                ],
                "x-component-props": {
                  "size": "default",
                  "clearable": true
                },
                "x-resource-group-name": "form",
                "x-resource-group-title": "form",
                "name": "idCard",
                "x-decorator-props": {
                  "colon": true,
                  "asterisk": true,
                  "wrapperCol": null,
                  "labelCol": null,
                  "labelWidth": "200px",
                  "wrapperWidth": "700px"
                },
                "x-designable-id": "r9af2fyixsd",
                "x-index": 0
              }
            }
          },
          "phone": {
            "type": "string",
            "title": "手机号",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-display": "visible",
            "x-pattern": "editable",
            "x-validator": [
              {
                "triggerType": "onBlur",
                "format": "phone",
                "message": "手机号输入错误",
                "required": true,
                "whitespace": true
              }
            ],
            "x-component-props": {
              "size": "default",
              "clearable": true
            },
            "x-resource-group-name": "form",
            "x-resource-group-title": "form",
            "name": "phone",
            "description": "",
            "required": true,
            "x-decorator-props": {
              "colon": true,
              "asterisk": true,
              "labelCol": null,
              "labelWidth": "200px",
              "wrapperWidth": "700px",
              "inset": false,
              "fullness": false,
              "wrapperAlign": "left",
              "wrapperCol": 700
            },
            "x-designable-id": "vki1a7juvi3",
            "x-index": 1
          },
          "name": {
            "type": "string",
            "title": "name",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-display": "visible",
            "x-pattern": "editable",
            "x-validator": [
              {
                "triggerType": "onBlur",
                "format": "zh",
                "message": "请使用中文格式",
                "required": true
              }
            ],
            "x-component-props": {
              "size": "default",
              "clearable": true,
              "placeholder": "请输入",
              "autofocus": false
            },
            "x-resource-group-name": "from",
            "x-resource-group-title": "from",
            "name": "name",
            "required": true,
            "x-decorator-props": {
              "colon": true,
              "asterisk": true,
              "labelCol": null,
              "labelWidth": "200px",
              "wrapperWidth": "700px",
              "inset": false,
              "wrapperCol": null,
              "gridSpan": 1
            },
            "x-designable-id": "w0zyyoam9db",
            "x-index": 2
          }
        }
      }
    },
    "x-designable-id": "29rokpuyra4"
  }
}