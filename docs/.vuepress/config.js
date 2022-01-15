module.exports = {
	title: '沐孜小栈',
	description: '一点点积累,慢慢构建属于自己的体系',
	head: [
		['link', {
			rel: 'icon',
			href: 'http://pearle.top/logo.png'
		}],
	],
	base: '/',
	port: '5209',
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		nav: [
			{
				text: 'HOME',
				link: '/blog/'
			},
			{
				text: '前端目录',
				link: '/blog/frontend/frontend1.md'
			},
			{
				text: 'github',
				link: 'https://github.com/MuChenScorpio/MuChenScorpio.github.io'
			},
			{
				text: 'gitee',
				link: 'https://gitee.com/muzi-young/smallstack_muzi.git'
			},
			{
				text: '语雀',
				link: 'https://www.yuque.com/dazhijiasi/ly_blog'
			},
			{
				text: '掘金',
				link: 'https://juejin.cn/user/4256917598251400/posts'
			},
			{
				text: '年度总结',
				items: [{
					text: 'year-2021',
					link: '/blog/yearEnd-review/2021-end.md'
				},
				{
					text: 'year-2022',
					link: '/blog/yearEnd-review/2022-start.md'
				}
				]
			}
		],
		sidebar: [{
			title: '首页',
			path: '/blog/',
			sidebarDepth: 2
		},
		{
			title: '可视化',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/datasee/svgstart'
			]
		},
		{
			title: '深入JS',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/js/Array/array-ways.md',
				'/blog/frontend/js/Array/array-style.md',
				'/blog/frontend/js/Object/object-inside.md',
				'/blog/frontend/js/Object/object-time.md',
				'/blog/frontend/js/differ-ts.md'
			]
		},
		{
			title: 'vue',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/vue/vue-01.md'
			]
		},
		{
			title: 'react',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/react/react-list.md'
			]
		},
		{
			title: 'Node基础',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/Node/node.md'
			]
		},
		{
			title: '工程化',
			sidebarDepth: 3,
			children: [
				'/blog/frontend/processh/pro-intro.md'
			]
		},
		]
	}
}
