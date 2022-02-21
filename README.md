# Journal

Personal Project

## Routes / Endpoints

| METHOD | ENDPOINT          | USAGE                                      | RETURNS                                                                 |
|--------|-------------------|--------------------------------------------|-------------------------------------------------------------------------|
| GET    | `/api/v1/journal` | Get all journal entries from the database  | An array of object with `{ id, date, title, paragraphs, added_by_user }`|
| POST   | `/api/v1/journal` | Add a journal entry to the database        | An object with the same object of the added journal entry               |
------------------
