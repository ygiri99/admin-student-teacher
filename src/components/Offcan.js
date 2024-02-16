import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

export default function Offcan() {
  let  [state,setState] = useState(false);
  return (
    <>
      <div>
  <Button
    color="primary"
    onClick={()=>{setState(state=true)}}
  >
    Open
  </Button>
  <Offcanvas  isOpen={state} toggle={()=>{setState(state=false)}}>
    <OffcanvasHeader toggle={()=>{setState(state=false)
    }}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div>
    </>
  )
}
