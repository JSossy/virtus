Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function() {
	this.render('home')
})

Router.route('/about', function() {
	this.render('about')
})

Router.route('/jobs', function() {
	this.render('jobs')
})

Router.route('/(.*)', function () {
	this.render('404')
})