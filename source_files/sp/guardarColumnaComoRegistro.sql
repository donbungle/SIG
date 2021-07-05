-- PROCEDURE: public.guardarcolumnacomoregistro(integer, character varying, character varying, character varying)

-- DROP PROCEDURE public.guardarcolumnacomoregistro(integer, character varying, character varying, character varying);

CREATE OR REPLACE PROCEDURE public.guaurdarcolumnacomoregistro(
	index_datos integer,
	tabla_datos character varying,
	tabla_cons character varying,
	tipo_tc character varying)
LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
    columna RECORD;
BEGINu
    RAISE NOTICE 'Refreshing all materialized views...%',index_datos;
	
    FOR columna IN
		select
		column_name as nombre,
		TO_DATE(column_name, 'monYY') as fecha,
		TO_CHAR(TO_DATE(column_name, 'monYY'), 'YYYYmm') as periodo,
		data_type as tipo
		--select *
		from information_schema.columns 
		where 1=1
		and table_name = tabla_datos --'paneles_panel_clientes' --tabla_datos
		and ordinal_position > index_datos
		and ordinal_position <> (
			select max(ordinal_position)
			from information_schema.columns 
			where table_name = tabla_datos
		)
		order by ordinal_position
    LOOP
		EXECUTE format(''
		|| 'INSERT INTO %L(periodo, item,tipo_tc,valor) '
		|| 'SELECT '
		|| '%L as periodo, item, %L as tipo_tc,CAST(%I as NUMERIC) as valor '
		|| 'FROM %I '
		|| 'WHERE tipo_tc=%L;',tabla_cons, columna.periodo, tipo_tc, columna.nombre, tabla_datos, tipo_tc);
		
        RAISE NOTICE 'Insertada columna %',quote_ident(columna.nombre);
    END LOOP;

    RAISE NOTICE 'Done refreshing materialized views.';
END;
$BODY$;
