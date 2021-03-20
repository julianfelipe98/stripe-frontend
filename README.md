# Plataforma de Pagos Frontend- Trabajo de Campo
Implementación de pasarela stripe con react

## Integración de la pasarela de pago
Para integrar stripe se se realizo la conexion a la API y el metodo de pago de tarjeta de credito ,el frontend se desarrolló con react .

la conexion a la API de stripe se encuentra en componente App donde se hace la conexion por medio de la llave publica dada por stripe

## Testing Data 
Para hacer uso de stripe ofrece unos datos de prueba:
 - Dado que estamos haciendoe el ejemplo de un pago mediante tarjeta, se deben ingresar los siguientes datos de prueba: 
    
    - 4242 4242 4242 4242 . Cualquier fecha de expiración en el futuro , CVC de 3 dígitos son válidos y un codigo postal valido.

##Despliegue 
Para probar el funcionamiento de la pasarela de pago , el front se encuentra desplegado a traves del servicio gratuito de firebase hosting 

[Click aqui para probar](https://stripe-checkout-payment.web.app/)

##Previsualizacion 
![Página principal](./assets/main.png)


