-- DROP TABLE public.paneles_panel_integral_base
CREATE TABLE public.paneles_panel_integral_base2
(
    fecha_proceso date,
    periodo VARCHAR(255),
    concepto VARCHAR(255),
    tenencia_tarjeta VARCHAR(255),
    tipo_tc VARCHAR(255),
    segmento_gestion VARCHAR(255),
    valor VARCHAR(255),
    periodo2 VARCHAR(255)
)


${'$1':replace('_', ' '):toDate('dd/MM/yyyy HH:mm',"GMT"):format('yyyy-MM-dd HH:mm:ss+00')}$2$3

^([0-9]{2}\/[0-9]{2}\/[0-9]{4}\_[0-9]{1,2}\:[0-9]{2})((?:.*;){6})(.*)$

${'$1':append(';TR')} 