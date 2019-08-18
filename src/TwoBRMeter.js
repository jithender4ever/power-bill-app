import React from 'react';
import {FormInput2BR} from "./FormInput2BR";

export function TwoBRMeter() {
    return (
        <div>
        <div className="ui card">
          <div className="content">
              <div className="header">
                2 BR Meter
              </div>
              <div className="meta">
                00000000
              </div>
              <div className="description">
                This meter is privately used by the tenants living in the 2 BR unit.
              </div>
          </div>
            <FormInput2BR unitType={"2BR"}/>
            <br />
        </div>
        </div>
    )
}
