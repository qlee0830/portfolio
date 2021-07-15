/**
 * Corelayout for the app
 *
 * @author Anh Tu Le <anh.le@vertics.co>
 *
 * @copyright Vertics Oy 2021
 */

import React from 'react';
import Info from './Info';
export default function CoreLayout() {
  return (
    <div className="core-layout">
      <div className="core-layout__content">
        <div className="core-layout__content-info">
          <Info />
        </div>
        <div className="core-layout__content-main">s</div>
        <div className="core-layout__content-nav">f</div>
      </div>
    </div>
  );
}
