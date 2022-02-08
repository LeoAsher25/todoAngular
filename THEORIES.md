##### MODULE:

- "declarations": is for things you'll use in your templates: mainly components
  (~ views: the classes displaying data), but also directives
- "provides": is for services (~ models: the classes getting and handling data)

## scope/visibility:

- declarations / components are in local scope (private visibility),
- providers / services are (generally) in global scope (public visibility)

# When to import main Angular modules?

1. Modules to import each time you need them:

- CommonModule: not import in first app module, cause it's already part of the BrowserModule.
- FormsModule / ReactiveFormsModule
- MatXModule and other UI Modules
- any other module giving you components, directives or pipes

2. Modules to import only once:

- HttpClientModule
- BrowserAnimationsModule or NoopAnimationsModule
- any other module providing you services only
