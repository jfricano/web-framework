## Goal

Build a simple web framework to create dynamic reusable components; a scaled-down React / Angular / Svelte.

## Core Requirements for Sample App

1. class to represent user and its data (name, age)
2. user class to CRUD
3. user class to persist data to server
4. user class to notify rest of app when data changed

## Classes

1. User
2. Model
3. View

### User Interface

```
private data: UserProps
get(propName:string): (string | number)
set(update: UserProps): void
on(eventName: string, callback: ()=>{}): void
trigger(eventName: string): void
fetch(): Promise
save(): Promise
```
