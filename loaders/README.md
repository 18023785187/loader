# loader

## xmlToObject-loader
    把任意后缀的文件转换成js对象，只要在文件中编写xml语法即可。

### .xml(双标签语法，tag为类型，name为属性名，如果是数组则不需要写name，内容为值)
```html
    <array name='arr'>
        <string>小红</string>
        <number>18</number>
        <object>
            <string name='name'>小红</string>
        </object>
        <array>
            <string>小红</string>
            <number>18</number>
        </array>
    </array>
    <string name='name'>小红</string>
    <number name='age'>18</number>
    <boolean name='isBoy'>true</boolean>
    <null name='nul'></null>
```

### 效果
```javascript
    {
        age: 18
        arr: ['小红', 18, {…}, Array(2)]
        isBoy: true
        name: "小红"
        nul: null
    }
```

目前只支持以下类型:
    number,
    string,
    boolean,
    null,
    object,
    array,
    undefined