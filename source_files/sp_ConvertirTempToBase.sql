CREATE OR REPLACE PROCEDURE ConvertirTempToBase()
LANGUAGE plpgsql
AS $$
BEGIN
	WITH
		columnas AS (
			select column_name,data_type
			from information_schema.columns 
			where table_name = 'cons_temp'
		)
		
	SELECT * FROM columnas;
END;
$$;


DO $$
BEGIN
  CALL ConvertirTempToBase();
END;
$$;
