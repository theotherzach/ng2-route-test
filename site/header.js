function HeaderComponent() {}
HeaderComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: "header"
  }),
  new angular.ViewAnnotation({
    templateUrl: 'site/header.html',
    directives: [
      angular.router.RouterLink
    ]
  })
];
