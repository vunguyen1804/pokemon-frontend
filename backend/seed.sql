CREATE TABLE IF NOT EXISTS trainers (UUID VARCHAR(36) PRIMARY KEY DEFAULT (uuid()), Name VARCHAR(256), Img VARCHAR(1024));

CREATE TABLE IF NOT EXISTS pokemon (ID INT PRIMARY KEY, Name VARCHAR(256), Move VARCHAR(256), Type VARCHAR(32), UUID VARCHAR(36),Img VARCHAR(1024));

SELECT * FROM trainers;

SELECT * FROM pokemon;

INSERT INTO
	trainers (Name, UUID, Img)
VALUES
	("Alice", "UUID1", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f7f4fbe2-fda5-4793-8cef-4d828a48909a/dar253j-65a108fe-6e1f-4802-bb4f-60447a127494.png/v1/fill/w_1600,h_1600,strp/request___original_pokemon_trainer__female__by_emcee82_dar253j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNjAwIiwicGF0aCI6IlwvZlwvZjdmNGZiZTItZmRhNS00NzkzLThjZWYtNGQ4MjhhNDg5MDlhXC9kYXIyNTNqLTY1YTEwOGZlLTZlMWYtNDgwMi1iYjRmLTYwNDQ3YTEyNzQ5NC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.G6JOKEIsEi66ltwD4sIDx9s4iOnHa5j0xIM9Oeb38HM"),
	("Bob", "UUID2" ,"https://www.ssbwiki.com/images/thumb/2/28/Pokémon_Trainer_%28solo%29_SSBU.png/1200px-Pokémon_Trainer_%28solo%29_SSBU.png");


INSERT INTO 
	pokemon(ID, UUID, Name, Move, Type, Img)
VALUES
	(1, "UUID1", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	(4, "UUID1", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	(7, "UUID2", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922");

	INSERT INTO 
	pokemon(UUID, Name, Move, Type, Img)
VALUES
	("UUID1", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID1", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID1", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922"),
	("UUID1", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID1", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID1", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922"),
	("UUID1", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID1", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID1", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922"),
	("UUID2", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID2", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID2", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922"),
	("UUID2", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID2", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID2", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922"),
	("UUID2", "Bulbasaur", "spit grass",  "Grass", "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"),
	("UUID2", "Charmander", "spit fire", "Fire", "https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911"),
	("UUID2", "Squirtle", "spit water", "Water", "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922");