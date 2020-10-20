CREATE TABLE authors (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_name" varchar
)

CREATE TABLE series (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" INT NOT NULL REFERENCES author(id)
  "series_name" varchar
)

CREATE TABLE books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" INT NOT NULL REFERENCES authors(id),
  "series_id" INT REFERENCES series(id)
  "title" VARCHAR,
  "genre" TEXT [],
  "published_year" INT,
  "page_count" INT,
  "medium" VARCHAR,
  "read_date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "read_status" BOOLEAN NOT NULL
  "rating" INT,
  "review" VARCHAR,
  "description" VARCHAR,
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
  series (series_name)
VALUES
  ('Harry Potter'),
  ('A Court of Thrones and Roses'),
  ('Thone of Glass'),
  ('Folk of the Air'),
  ('The Heroes of Olympus'),
  ('Percy Jackson and the Olympians'),
  ('The Trials of Apollo'),
  ('Blood and Ash');

INSERT INTO 
  books (author_id, series_id, title, genre, published_year, page_count, medium, read_date, read_status, rating, review, description)
VALUES
  (2, 3, 'Throne of Glass', ARRAY ['fantasy', 'romance', 'fiction', 'YA'], 2012, 406, 'book', '2020-09-01', TRUE, 9, 'Great start to a great series.', 'After a year of slavery, an infamous teenage assassin named Celaena is given the chance to become the tyrannical king''s personal assassin/King''s Champion by representing Prince Dorian in a competition against the most gifted thieves and assassins in the land. She must survive every test and trial in order to proceed to the final, in which she has to fight her remaining opponents to the death. As candidates are found dead in the castle, their bodies ruptured, Celaena finds herself delving deep into mysteries concerning not only her, but her very own ancestors and the creatures of darkness that dwell deep beneath the castle.'),
  (1, 1, 'Harry Potter and the Sorcerer''s Stone', ARRAY ['fantasy', 'fiction', 'YA'], 1997, 309, 'book', '2018-02-01', TRUE, 9, 'This series brought me back to reading', 'When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry. They are swiftly confiscated by his aunt and uncle. Then, on Harry’s eleventh birthday, a strange man bursts in with some important news: Harry Potter is a wizard and has been awarded a place to study at Hogwarts. And so the first of the Harry Potter adventures is set to begin.')