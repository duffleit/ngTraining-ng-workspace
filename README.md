# Angular Workspace Monorepo 

This exercise shows you how to create a monorepo workspace by just using Angular-CLI commands.

## Tasks: 

1. Create a new workspace without the initial application. 
```
ng new your-workspace --create-application=false
cd your-workspace
```

2. Create an `overview`, and a `checkout` application.
```
ng generate application overview --routing
ng g app checkout --routing
```

3. Create a `user-widget` library, which provides a reusable user-widget component, that shows the current user and allows to log out.
```
ng generate library user-widget --prefix=feature
```

4. Move the create library from `./projects/user-widget` to `./projects/@feature/user-widget`, and update all the changed files in the angular-workspace configuration which can be found in `angular.json`. Also, check all the relative-paths in the config files like `tsconfig.lib.spec`.  

5. Create a second library in the `./projects/@ui`-folder which is called `button`.
```
ng g lib button --prefix=ui
```

6. Create a third library which is called `bitcoin-miner` and lives in the `./projects/@core` folder.
```
ng g lib bitcoin-miner --prefix=core
```

7. Create a data-client library called `user-provider` which is located in `./projects/@data`.
```
ng g lib user-provider --prefix=data
```

8. Run all builds, to ensure that everything works fine. Add a `build:all` script to your `package.json`.
```
ng b bitcoin-miner && ng b user-widget && ng b button && ng b user-provider && ng build overview && ng b checkout
```

9. Import the `ButtonModule` in the checkout-application and use the `<ui-button>` in the corresponding `app.component.html`. The import for the `ButtonModule` should look like this: `import { ButtonModule } from '@ui/button';`. _Hint: You need to modify the root-`tsconif.json` and the button-`package.json` to get this working._ 

10. Verify that your import works also with the AOT-compiler by running `ng build button && ng build checkout --prod`.

11. Extend the `BitcoinMinerService` by a fictive `mine()`-method and add it to the project. Extend the button with an `@Output`-Emitter, which gets triggered for each click. Import the `BitcoinMinerService` in the checkout-app and invoke the introduced `mine()`-function from the in step 9 inserted button.

12. Check if the `BitcoinMinerService` can inject the transitive `ButtonService`.  
