function SiteComponent() {
  this.message = "I'm the parent";
}
SiteComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: "site"
  }),
  new angular.ViewAnnotation({
    templateUrl: 'site/site.html',
    // directives: [ChildComponent]
  })
];


document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(SiteComponent);
});
