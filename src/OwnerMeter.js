import React from 'react';

export function OwnerMeter() {
    return (
        <div>
        <div className="ui card">
          <div className="content">
              <div className="header">
                Owner's Meter
              </div>
              <div className="meta">
                00000000
              </div>
              <div className="description">
                This meter is privately used by the owners/tenants living in the furnished 2 BR unit.
                <br/>
                <p><span><i>Note that this is a 3-phase meter</i></span></p>
              </div>
          </div>
          <div className="extra content">
            <div className="ui button">
              <div className="ui basic green button">Compute Bill</div>
            </div>
          </div>
        </div>
        </div>
    )
}
