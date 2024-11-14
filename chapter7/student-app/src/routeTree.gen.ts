/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as StudentsCreateImport } from './routes/students/create'
import { Route as StudentsIdImport } from './routes/students/$id'
import { Route as StudentsEditIdImport } from './routes/students/edit/$id'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StudentsCreateRoute = StudentsCreateImport.update({
  id: '/students/create',
  path: '/students/create',
  getParentRoute: () => rootRoute,
} as any)

const StudentsIdRoute = StudentsIdImport.update({
  id: '/students/$id',
  path: '/students/$id',
  getParentRoute: () => rootRoute,
} as any)

const StudentsEditIdRoute = StudentsEditIdImport.update({
  id: '/students/edit/$id',
  path: '/students/edit/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/students/$id': {
      id: '/students/$id'
      path: '/students/$id'
      fullPath: '/students/$id'
      preLoaderRoute: typeof StudentsIdImport
      parentRoute: typeof rootRoute
    }
    '/students/create': {
      id: '/students/create'
      path: '/students/create'
      fullPath: '/students/create'
      preLoaderRoute: typeof StudentsCreateImport
      parentRoute: typeof rootRoute
    }
    '/students/edit/$id': {
      id: '/students/edit/$id'
      path: '/students/edit/$id'
      fullPath: '/students/edit/$id'
      preLoaderRoute: typeof StudentsEditIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/register': typeof RegisterRoute
  '/students/$id': typeof StudentsIdRoute
  '/students/create': typeof StudentsCreateRoute
  '/students/edit/$id': typeof StudentsEditIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/register': typeof RegisterRoute
  '/students/$id': typeof StudentsIdRoute
  '/students/create': typeof StudentsCreateRoute
  '/students/edit/$id': typeof StudentsEditIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/register': typeof RegisterRoute
  '/students/$id': typeof StudentsIdRoute
  '/students/create': typeof StudentsCreateRoute
  '/students/edit/$id': typeof StudentsEditIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
    | '/students/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
    | '/students/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
    | '/students/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  LoginRoute: typeof LoginRoute
  ProfileRoute: typeof ProfileRoute
  RegisterRoute: typeof RegisterRoute
  StudentsIdRoute: typeof StudentsIdRoute
  StudentsCreateRoute: typeof StudentsCreateRoute
  StudentsEditIdRoute: typeof StudentsEditIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  LoginRoute: LoginRoute,
  ProfileRoute: ProfileRoute,
  RegisterRoute: RegisterRoute,
  StudentsIdRoute: StudentsIdRoute,
  StudentsCreateRoute: StudentsCreateRoute,
  StudentsEditIdRoute: StudentsEditIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/login",
        "/profile",
        "/register",
        "/students/$id",
        "/students/create",
        "/students/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/login": {
      "filePath": "login.jsx"
    },
    "/profile": {
      "filePath": "profile.jsx"
    },
    "/register": {
      "filePath": "register.jsx"
    },
    "/students/$id": {
      "filePath": "students/$id.jsx"
    },
    "/students/create": {
      "filePath": "students/create.jsx"
    },
    "/students/edit/$id": {
      "filePath": "students/edit/$id.jsx"
    }
  }
}
ROUTE_MANIFEST_END */