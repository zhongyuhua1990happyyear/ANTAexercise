var gulp = require("gulp");

/*
	原理：
		1、开启任务  task()


		2、gulp的机制：管道机制

		输入源     管道            输出源
		碗         你妈妈的嘴      你的嘴里面

		src()      pipe()           dest()


		找到文件的路径  然后通过管道压缩  然后输出到dist文件中

 */
//开启一个任务参数是任务的名称
gulp.task("copyIndex",function () {
	//找到index文件然后通过管道放在dist文件夹下面的html文件夹里面
	 gulp.src("src/html/index.html").pipe(gulp.dest("dist/html"))
})

//开启一个任务参数是任务名称
gulp.task("copyhtml",function(){
	//src下面html文件夹下面所有的文件夹下面所有的文件
	gulp.src("src/html/**/*").pipe(gulp.dest("dist/html"))
})


gulp.task("copyjs",function(){
	gulp.src("src/js/**/*").pipe(gulp.dest("dist/js"))
})



//--------------------------------------

//图片压缩
var minImg = require("gulp-imagemin");

//开启一个任务 minImg 任务名称 
gulp.task("minImg",function(){
	//输入源
	gulp.src("src/img/**/*")
	//管道压缩
	.pipe(minImg())
	//管道输出 
	.pipe(gulp.dest("dist/img"));
})


//js压缩
var minJs = require("gulp-uglify");
gulp.task("minJs",function(){
	gulp.src("src/js/**/*")
	.pipe(minJs())
	.pipe(gulp.dest("dist/js"));
})

//编译sass压缩css
var minCss = require("gulp-sass-china");
gulp.task("minCss",function(){
	//找到相应的文件
	gulp.src("src/sass/**/*")
	//通过管道编译及压缩
	.pipe(minCss({
		//编译后的风格
		outputStyle:"compressed"
	}))
	//输出源到哪
	.pipe(gulp.dest("dist/css"))
})


//监听
gulp.task("watch",function(){
	//监听sass下面所有的文件   当文件发送变化以后执行数组里面的任务
	gulp.watch("src/sass/**/*",["minCss"])
	/*
		参数1：需要监听的文件
		参数2：是一个数组  数组里面是需要执行的任务名称

	 */
})


//搭建服务器
var connect = require("gulp-connect");

gulp.task("server",function(){
	//创建了一个服务器然后对服务器进行了一些配置
	connect.server({
		root:"src/",
		port:8899,
		//当文件发送改变的时候会自动刷新页面
		livereload:true
	})
})


//自动刷新
gulp.task("watch-file",function(){
	//当监听src下面所有的文件
	gulp.watch("src/**/*",function(){
		//当文件发送改变的时候src下面所有的文件浏览器都会进行自动刷新
		gulp.src("src/**/*").pipe(connect.reload());
	})
})

gulp.task("F5",["watch-file","server"])


/*
	第一步要开启服务地   要定义一个服务器这样的任务

	第二步需要监听文件的变化  如果文件发生改变的时候需要将服务器进行刷新

	第三部运行任务   需要将监听任务和服务器任务一起进行运行

 */


//合并文件
var concat = require("gulp-concat");

gulp.task("concat",function(){
	//找出需要合并的文件
	gulp.src(["src/js/js/ajax.js","src/js/js/pool.js"])
	//将合并的文件取一个新的名字
	.pipe(concat("concat.js"))
	.pipe(minJs())
	//将合并后的文件放在dist文件夹下面
	.pipe(gulp.dest("dist/js"))
})


//如何将es6的代码转换为es5的代码
const babel = require('gulp-babel');

gulp.task("babel",function(){
	gulp.src("src/js/js/ajax.js")
	.pipe(babel({
		//将es6的代码转换为ES5的代码
		 presets: ['env']
	}))
	.pipe(minJs())
	.pipe(gulp.dest("dist/js"))
})
