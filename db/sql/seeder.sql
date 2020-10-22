CREATE TABLE authors (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_name" VARCHAR
)

CREATE TABLE series (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" INT NOT NULL REFERENCES author(id),
  "series_name" VARCHAR
)

CREATE TABLE genre (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "genre_name" VARCHAR,
  "book_id" INT REFERENCES book(id)
)

CREATE TABLE medium (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "medium_type" VARCHAR
)

CREATE TABLE books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "author_id" INT NOT NULL REFERENCES authors(id),
  "series_id" INT REFERENCES series(id),
  "title" VARCHAR,
  "published_year" INT,
  "page_count" INT,
  "series_number" INT,
  "medium" VARCHAR,
  "read_date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "read_status" BOOLEAN NOT NULL,
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
  series (author_id, series_name)
VALUES
  (1, 'Harry Potter'),
  (2, 'A Court of Thrones and Roses'),
  (2, 'Thone of Glass'),
  (3, 'Folk of the Air'),
  (4, 'The Heroes of Olympus'),
  (4, 'Percy Jackson and the Olympians'),
  (4, 'The Trials of Apollo'),
  (5, 'Blood and Ash');

INSERT INTO
  genre (genre_name, book_id)
VALUES
  ("fantasy", 1),  
  ("fantasy", 2),
  ("fantasy", 2),
  ("YA", 1),  
  ("YA", 2),
  ("romance", 3),
  ("fantasy adult", 3)

INSERT INTO 
  medium (medium_type)
VALUES
  ("print"),
  ("ebook"),
  ("audiobook")  

INSERT INTO 
  books (author_id, series_id, title, published_year, page_count, series_number, medium, read_date, read_status, rating, review, description)
VALUES
  (2, 3, 'Throne of Glass', 2012, 406, 1, 1, '2020-09-01', TRUE, 9, 'Great start to a great series.', 'After a year of slavery, an infamous teenage assassin named Celaena is given the chance to become the tyrannical king''s personal assassin/King''s Champion by representing Prince Dorian in a competition against the most gifted thieves and assassins in the land. She must survive every test and trial in order to proceed to the final, in which she has to fight her remaining opponents to the death. As candidates are found dead in the castle, their bodies ruptured, Celaena finds herself delving deep into mysteries concerning not only her, but her very own ancestors and the creatures of darkness that dwell deep beneath the castle.'),
  (1, 1, 'Harry Potter and the Sorcerer''s Stone', 1997, 309, 1, 1, '2018-02-01', TRUE, 9, 'This series brought me back to reading', 'When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry. They are swiftly confiscated by his aunt and uncle. Then, on Harry’s eleventh birthday, a strange man bursts in with some important news: Harry Potter is a wizard and has been awarded a place to study at Hogwarts. And so the first of the Harry Potter adventures is set to begin.'),
  (2, 2, 'A Court of Thorns and Roses', 2015, 432, 1, 2, "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world. At least, he's not a beast all the time. As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she's been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin-and his world-forever.")