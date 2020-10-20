CREATE TABLE authors (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_name" varchar
)

CREATE TABLE series (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" int NOT NULL REFERENCES author(id)
  "series_name" varchar
)

CREATE TABLE books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" int NOT NULL REFERENCES authors(id),
  "series_id" int REFERENCES series(id)
  "title" varchar,
  "genre" varchar,
  "published_year" int,
  "page_count" int,
  "medium" varchar,
  "description" varchar,
  "rating" int,
  "review" varchar,
  "read_date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "read_status" BOOLEAN NOT NULL
)

INSERT INTO 
  authors (author_name) 
VALUES 
  ('J.K. Rowling'),
  ('Sarah J. Maas'),
  ('Holly Black'),
  ('Rick Riordan'),
  ('Jennifer L. Armentrout'),
  ('Jane Austen');

  INSERT INTO 
    books ()