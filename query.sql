select
  a.first_name,
  a.last_name,
  f.title,
  f.film_id,
  a.actor_id
from
  sakila.actor a
  inner join sakila.film_actor fa on a.actor_id = fa.actor_id
  inner join sakila.film f on fa.film_id = f.film_id
where
  a.actor_id in ('1', '20')
  and f.film_id = 499