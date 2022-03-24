## 自定义自己的loader

+ 把 md 文件转为 webpack能够认识的文件

+ 发现 在自定义的loader中不可以使用fs模块

+ 想办法使用fs模块,因为最终要把md文件转成vue文件

+ 想到自定义插件,在插件中可以使用fs模块

+ 通过fs动态创建文件

+ 这就是本次demo的全部内容 自定义loader plugin

+ loader本质就是一个函数,接受匹配到的文件的内容

+ plugin可以是一个函数也可以是一个类 一般使用new的方式使用 规定要类中要有apply方法 在plugin中可以监听webpack发出的事件(tapable这个库)

over!!