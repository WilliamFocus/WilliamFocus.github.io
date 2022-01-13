(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{604:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("strong",[s._v("——用于表示一个独一无二的类字符串类型的类型值")])]),s._v(" "),n("h2",{attrs:{id:"_1-作用："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用："}},[s._v("#")]),s._v(" 1.作用：")]),s._v(" "),n("ol",[n("li",[s._v("通常可用作对象独一无二键或者值，解决命名冲突；")]),s._v(" "),n("li",[s._v("可用作 Switch...case 中代表唯一的常量值；")]),s._v(" "),n("li",[s._v("消除魔术字符串（即多处重复出现的字符串，造成代码不清晰）；")]),s._v(" "),n("li",[s._v("可以实现对象一些非私有、作用于内部的方法(可以获取但通常无法正常去遍历得到)；")])]),s._v(" "),n("h2",{attrs:{id:"_2-注意点："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意点："}},[s._v("#")]),s._v(" 2.注意点：")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("Symbol()")]),s._v(" 只能像普通函数一样使用，而不能像构造函数一样 new，因为其只返回一个原始类型的值；")]),s._v(" "),n("li",[n("code",[s._v("Symbol(...)")]),s._v(" 可接受一个字符串参数用于做描述，否则所有不同的 symbol 都显示一个样；\n若参数为对象则自动调用对象的 toString 方法；")]),s._v(" "),n("li",[s._v("symbol 不能与其他类型拼接和运算；")]),s._v(" "),n("li",[s._v("可以显式转为 Boolearn 类型和字符串类型，不可转数值型；")]),s._v(" "),n("li",[s._v("只能使用"),n("code",[s._v("Object.getOwnPropertySymbols()")]),s._v("和"),n("code",[s._v("Reflect.ownKeys()")]),s._v(" 获取到对象内部的 Symbol 键；")])]),s._v(" "),n("div",{staticClass:"language-tsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Symbol(b)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "symbol"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "Symbol(b)"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Boolearn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TypeError")]),s._v("\n\na"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("description "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "a" //可以直接获取symbol的描述')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_3-常用方法："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用方法："}},[s._v("#")]),s._v(" 3.常用方法：")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("Symbol.for(...[key]...)")]),s._v(" 可以根据 key 搜索(所有)得到已有的 symbol，如没有则会自动创建且记录到全局环境，供下次搜索；\n"),n("strong",[s._v("区别：")]),s._v("\nSymbol.for "),n("strong",[s._v("先寻找，无则再记录且创建；")]),s._v("\nSymbol "),n("strong",[s._v("直接创建；")])]),s._v(" "),n("li",[n("code",[s._v("Symbol.keyFor(...symbol...)")]),s._v(" 返回对应已经全局记录的 symbol 的 key 值（描述值）\n（即只能获得到 Symbol.for 全局记录下来的 symbol）")]),s._v(" "),n("li",[s._v("内置"),n("code",[s._v("11种")]),s._v("Symbol，指向 JS 语言被内部使用；")])])])}),[],!1,null,null,null);t.default=e.exports}}]);