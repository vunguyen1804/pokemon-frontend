# display all databases:
SHOW DATABASES;

# select databases
USE <database name>;

# drop table:
DROP TABLE <table name>;


SELECT * FROM trainers 
LEFT JOIN (SELECT UUID AS UUID_, Name AS Name_  FROM pokemon) AS p 
ON trainers.UUID = p.UUID_ or  trainers.Name = ${term}
WHERE
p.Name_ = ${term} \G;


SELECT * FROM trainers 
LEFT JOIN (SELECT UUID AS UUID_, Name AS pokemonName  FROM pokemon) as temp
ON trainers.UUID = temp.UUID_ or  trainers.Name = 'Bulbasaur'
WHERE
temp.pokemonName = 'Bulbasaur' \G;