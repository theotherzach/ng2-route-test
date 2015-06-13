function Home() {
  console.log('home!', this)
  // this.message = "I'm the parent";
}
// Home.parameters = [[angular.router.RouteConfig]]
Home.annotations = [
  new angular.ComponentAnnotation({
    selector: "home",
    // injectables: [angular.router.RouteConfig]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'site/home/home.html',
    // directives: [HeaderComponent, FooterComponent]
  })
];
