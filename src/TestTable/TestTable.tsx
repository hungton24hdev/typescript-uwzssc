import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Inject,
  Sort,
  VirtualScroll,
} from '@syncfusion/ej2-react-grids';
import { useEffect, useState } from 'react';
import { getData } from './service';
const getHeaderTemplate = (headerText: any) => {
  return () => <span>{headerText}</span>;
};
const groups = [
  { text: 'Group 1', value: 'Group1' },
  { text: 'Group 2', value: 'Group2' },
];

export function TableView(): JSX.Element | null {
  const [group, setGroup] = useState(groups[0].value);
  const [dataSource, setDataSource] = useState<any>([]);
  function handleChangeGroup(e: any) {
    setGroup(e.value);
  }
  useEffect(() => {
    setDataSource(getData(1000, group));
  }, [group]);

  return (
    <div className="control-pane">
      <div className="control-section">
        <div>
          <DropDownListComponent
            id="games"
            width="220"
            index={0}
            popupHeight="240px"
            dataSource={groups}
            fields={{ text: 'text', value: 'value' }}
            onChange={handleChangeGroup}
          />
          <span id="msg"></span>
          <br />
        </div>
        <GridComponent
          id="overviewgrid"
          enableVirtualization={true}
          rowHeight={38}
          height="600"
          dataSource={dataSource}
          key={group}
        >
          <ColumnsDirective>
            <ColumnDirective
              field={`${group}_VALUE`}
              visible={true}
              isPrimaryKey={true}
              width="130"
            ></ColumnDirective>
            <ColumnDirective
              field="Employees"
              headerText="Employee Name"
              width="230"
              clipMode="EllipsisWithTooltip"
              headerTemplate={getHeaderTemplate('Custom name colum')}
            />
            <ColumnDirective
              field="Designation"
              headerText="Designation"
              width="170"
              clipMode="EllipsisWithTooltip"
            />
            <ColumnDirective
              field="Mail"
              headerText="Mail"
              width="230"
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Filter, VirtualScroll, Sort]} />
        </GridComponent>
      </div>
    </div>
  );
}
