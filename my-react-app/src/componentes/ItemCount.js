import * as React from 'react';

import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Counter() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);

  function incrementCount() {
    if (stock != 0) {
      setCount((count) => count + 1);
      setStock((stock) => stock - 1);
    }
  }
  function discCount() {
    if (stock != 10) {
      setCount((count) => count - 1);
      setStock((stock) => stock + 1);
    }
  }
  return (
     <>
        
      <CardGroup>
      
      <Card style={{ width: '18rem' }}>
<Card.Img src="https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/2/8/289-0a3mtf4w.jpg" />
     <Card.Body>
      <Card.Title>Vans surf</Card.Title>
      <Card.Text>
      Calzado urbano de hombre marca Vans. Con entresuela UltraCush co-moldeada, detalles RapidWeld actualizados, suela de goma ligera troquelada y parte superior transpirable inspirada en Old Skool. 289-0A5EDYIJU 
      </Card.Text>
     </Card.Body>
     <Card.Footer>
     <p>Agregado: {count}</p>
       <Button variant="primary" onClick={incrementCount} >Agregar</Button>{' '}
    <Button variant="primary" onClick={discCount}>Quitar</Button>{' '}
    <p>STOCK : {stock}</p>
    </Card.Footer>
  </Card>
  <Card > 
    <Card.Img src="https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/2/8/289-0a38dm186.jpg" />
    <Card.Body>
      <Card.Title>Vans Holigh</Card.Title>
      <Card.Text>
      Calzado urbano de hombre marca Vans. Con entresuela UltraCush co-moldeada, detalles RapidWeld actualizados, suela de goma ligera troquelada y parte superior transpirable inspirada en Old Skool. 289-0A5EDYIJU
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p>Agregado: {count}</p>
    <Button variant="primary" onClick={incrementCount} >Agregar</Button>{' '}
    <Button variant="primary" onClick={discCount}>Quitar</Button>{' '}
    <p>STOCK : {stock}</p>
    </Card.Footer>
    
  </Card>
  
  <Card style={{ width: '18rem' }}>
    <Card.Img  src="https://cdn.shopify.com/s/files/1/0594/7506/7048/products/ul3_2x_dc01da22-8080-48ec-9280-37c1994ccc31_1000x.jpg?v=1641584699" />
    <Card.Body>
      <Card.Title>Vans Rep</Card.Title>
      <Card.Text>
      Calzado urbano de hombre marca Vans. Con entresuela UltraCush co-moldeada, detalles RapidWeld actualizados, suela de goma ligera troquelada y parte superior transpirable inspirada en Old Skool. 289-0A5EDYIJU
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p>Agregado: {count}</p>
    <Button variant="primary" onClick={incrementCount} >Agregar</Button>{' '}
    <Button variant="primary" onClick={discCount}>Quitar</Button>{' '}
    <p>STOCK : {stock}</p>
   
    </Card.Footer>
  </Card>
  
  </CardGroup>



  

    </>
  );

}