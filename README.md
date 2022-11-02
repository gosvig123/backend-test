# Back-end Coding Interview

## 📑 Requirements

- Docker
- Node.js
- Package manager as npm or yarn
- Postman

## 💽 Setup

1. Clone the repo
2. Run `yarn` to install dependencies
3. You can run the project by running `yarn run dev`
4. 
5. Check that the endpoints listed work (except "Create an entry")
6. Familiarize yourself with the code

## 🏕 Context

We are building a learning platform to let our students know at first glance what topics they're learning today. The back-end is accessible through a RESTful API that serves the following resources:

- Topics – the different high-level concepts that we cover in our course. For example, "React"
- Entries – the different sessions that compose a topic. Examples are "Component Lifecycle Lecture", "Hooks Lecture", or "Netflix exercise"

## 👩‍🔬 Requirements

### 1. Create an Entry

Create a route ` POST /topics/<topic_id>/entries` that allow the client to create an entry related to a specific topic.

The following fields are mandatory:

- `title` *String* – the name for the entry.
- `content` *String* – the content of the entry.
- `type` *String* – one of the types an entry can be. Please, check the schema to know the possible values.

Optionally, you can add a `url` (*String*) field.

### 2. Nest the list of Entries when retrieving one Topic

With the existing route `GET /topics/:id` we can retrieve the details of a topic. Nest the list of entries that are related to that topic.

### 3. Add a count of the number of entries for each topic in the list of topics.

`GET /topics/` will list all the topics we have, can you add a field called `numEntries` that gives us the number of entries related to each of them?