(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{611:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-常用基本类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用基本类型"}},[s._v("#")]),s._v(" 1.常用基本类型")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("数组(Array)："),n("code",[s._v("T[]")]),s._v(" / "),n("code",[s._v("Array<T>")]),s._v(" (推荐第一种写法，第二种可能与 jsx 产生语法冲突)")])]),s._v(" "),n("li",[n("strong",[s._v("元组(Tuple)：")]),s._v(" 固定个数元素、每个元素类型未必相同的数组，而不是用对象；（仅做运行时约束，而不能起到真正的限制作用）")])]),s._v(" "),n("hr"),s._v(" "),n("ul",[n("li",[n("strong",[s._v("unknow：")]),s._v(" 所有类型的父类型，且不可赋值到其他类型，其他类型可以赋值给 unknown")]),s._v(" "),n("li",[n("strong",[s._v("any：")]),s._v(" 可分配到任意类型，忽略类型检查，可以兼容除 never 之外所有的类型（"),n("strong",[s._v("不推荐使用，Any is Hell")]),s._v("）")])]),s._v(" "),n("hr"),s._v(" "),n("ul",[n("li",[n("strong",[s._v("void：")]),s._v(" 返回值为 undefined 或者 null 的函数")]),s._v(" "),n("li",[n("strong",[s._v("never：")]),s._v(" 所有其他类型的子类型，也代表函数中永不会返回值，即不会执行完；"),n("div",{staticClass:"language-tsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、在恒为 false 的类型守卫条件判断下，变量的类型将缩小为 never")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、（never 是所有其他类型的子类型，所以是类型缩小为 never，而不是变成 never）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLowerCase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型“never”上不存在属性“toLowerCase”.ts(2339)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])]),s._v(" "),n("li",[n("strong",[s._v("枚举类型("),n("code",[s._v("Enums")]),s._v(")：")]),s._v(" 用来表示一个被命名的整型常数的集合（兼具值和类型于一体）详见后面 ⬇️")])]),s._v(" "),n("hr"),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("💡 "),n("strong",[s._v("注意：")])]),s._v(" "),n("ol",[n("li",[s._v("小写格式对应的类型"),n("code",[s._v("number")]),s._v("、"),n("code",[s._v("string")]),s._v("、"),n("code",[s._v("boolean")]),s._v("、"),n("code",[s._v("symbol")]),s._v("是基元类型(原始类型)；\n大写类型**"),n("code",[s._v("Number")]),s._v("、"),n("code",[s._v("String")]),s._v("、"),n("code",[s._v("Boolean")]),s._v("、"),n("code",[s._v("Symbol")]),s._v("**则是基本包装对象类型(对象类型)；\n原始类型兼容可赋值给对应的对象类型，对象类型不能兼容赋值对应的原始类型\n注意两者不等价；（即类似字面量创建的number与new Number()创建的区别）\n⇒   记住尽量不要使用对象类型来注解值的类型！")]),s._v(" "),n("li",[s._v("object类型代表所有非原始类型；\nObject类型( 简写"),n("code",[s._v("{}")]),s._v(" )则代表所有原始类型（null、undefined 除外）和非原始类型；\nobject与Object两者类型互为父子类型；\nstrictNullChecks开启则null、undefined也不能兼容；")])])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"_2-类型断言-as"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-类型断言-as"}},[s._v("#")]),s._v(" 2.类型断言(as)")]),s._v(" "),n("p",[s._v("（——类似进行仅作用在类型层面的"),n("strong",[s._v("强制类型转换")]),s._v("）")]),s._v(" "),n("div",{staticClass:"language-tsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arrayNumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一种：as")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" greaterThan2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arrayNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二种：<T>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" greaterThan2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("arrayNumber.find(num => num > 2)\n\n// 第三种：\n字面量值 + as const 语法结构进行常量断言\n\n// 第四种：非空断言！（**不推荐使用**）\n变量、属性的后边添加 '!' 断言操作符，可以用来排除值为 null、undefined 的情况；\n推荐使用（类型守卫）代替，这样会更安全，减少运行时bug的出现。\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"_3-类型推断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型推断"}},[s._v("#")]),s._v(" 3.类型推断")]),s._v(" "),n("p",[s._v("（——编译器可以通过代码"),n("strong",[s._v("所在的上下文推导其对应的类型")]),s._v("，无须再声明变量类型）")]),s._v(" "),n("ul",[n("li",[s._v("TS 类型标注声明是在变量之后的好处之一就是进行类型推断推导变量类型；")]),s._v(" "),n("li",[s._v("具有初始化值的变量、有默认值的函数参数、函数返回的类型，可以进行类型推断；")])]),s._v(" "),n("div",{staticClass:"language-tsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is string'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---\x3e string （字面量类型拓宽）")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is string'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---\x3e 'this is string'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这两个定义的变量类型推断出来并不一致")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// let定义的类型为string，而const定义类型为'this is string'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"_4-字面量类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-字面量类型"}},[s._v("#")]),s._v(" 4.字面量类型")]),s._v(" "),n("p",[s._v("（——字面量类型是"),n("strong",[s._v("集合类型")]),s._v("的"),n("strong",[s._v("子类型")]),s._v("，它是集合类型的一种"),n("strong",[s._v("更具体")]),s._v("的表达）")]),s._v(" "),n("ul",[n("li",[s._v("集合类型："),n("code",[s._v("number")]),s._v("、"),n("code",[s._v("string")]),s._v("、"),n("code",[s._v("boolean")])]),s._v(" "),n("li",[s._v("字面量类型：1，12，123，‘a’，‘ab’，‘abc’等这些都表示具体类型(即 number、string 的子类型)")])]),s._v(" "),n("p",[n("strong",[s._v("字符串字面量类型")]),s._v("：即具体的字符串；")]),s._v(" "),n("p",[n("strong",[s._v("数字字面量类型")]),s._v("：即具体的数字；")]),s._v(" "),n("p",[n("strong",[s._v("布尔字面量类型")]),s._v("：true | false （与 boolean 无区别）；")]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"💡-字面量类型拓宽（literal-widening）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#💡-字面量类型拓宽（literal-widening）"}},[s._v("#")]),s._v(" 💡 字面量类型拓宽（Literal Widening）")]),s._v(" "),n("p",[s._v("（——字面量子类型转换为父类型）")]),s._v(" "),n("p",[s._v("所有通过 "),n("code",[s._v("let")]),s._v(" 或 "),n("code",[s._v("var")]),s._v(" 定义的变量、函数的形参、对象的非只读属性，如果满足"),n("strong",[s._v("指定了初始值")]),s._v("且"),n("strong",[s._v("未显式添加类型注解")]),s._v("的条件，那么它们"),n("strong",[s._v("推断")]),s._v("出来的类型就是指定的初始值字面量类型拓宽后的类型")]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"💡-其他类型拓宽（type-widening）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#💡-其他类型拓宽（type-widening）"}},[s._v("#")]),s._v(" 💡 其他类型拓宽（Type Widening）")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("let")]),s._v("、"),n("code",[s._v("var")]),s._v("定义的变量如果满足未显式声明类型注解且被赋予了 null 或 undefined 值（必须仅限这两个值"),n("strong",[s._v("直接")]),s._v("赋值时），则推断出这些变量的类型是 any；")]),s._v(" "),n("div",{staticClass:"language-tsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型拓宽成 any")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型是 null")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" z "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型是 null")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" z "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型是 null")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("hr"),s._v(" "),n("h3",{attrs:{id:"💡-类型收缩（type-narrowing）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#💡-类型收缩（type-narrowing）"}},[s._v("#")]),s._v(" 💡 类型收缩（Type Narrowing）")]),s._v(" "),n("p",[s._v("（——通过"),n("strong",[s._v("某些操作")]),s._v("将变量的类型由一个较为宽泛的集合缩小到相对较小、较明确的集合）")]),s._v(" "),n("ul",[n("li",[s._v("可以使用类型守卫，也可以通过字面量类型相等值判断（===）或其他控制流语句（包括但不限于 if、三目运算符、switch 分支）将联合类型收敛为更具体的类型；编译器也可以推断出收敛后的具体类型；")])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"_5-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[s._v("#")]),s._v(" 5.总结")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("ul",[n("li",[n("code",[s._v("let")]),s._v("声明的简单类型字面量会拓宽类型；")]),s._v(" "),n("li",[n("code",[s._v("const")]),s._v("声明的简单类型字面量会收窄；")])]),s._v(" "),n("p",[n("strong",[s._v("注意点：")])]),s._v(" "),n("ol",[n("li",[n("code",[s._v("const")]),s._v("声明的对象其属性会自动推断对应的类型，但是可以用"),n("code",[s._v("as const")]),s._v("收窄，让每一个key都是固定类型，会让对象的每个属性变成只读（readonly）")]),s._v(" "),n("li",[n("code",[s._v("const")]),s._v("声明的变量若使用模板字符串进行赋值，若含有变量，则会拓宽为string类型，否则为收缩的字符串字面量类型；")])])]),s._v(" "),n("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);