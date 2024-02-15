'use client'
import React, { useState } from 'react'
import ItemDescription from "../components/ItemDescription";

interface Item {
  name: string;
  description: string;
  into: string[];
  isInMap: boolean;
  from: string[];
  gold: { [key: string]: number };
}

interface ToolTipProps{
    data: {[key: string]: Item};
    name: string;
    from: string[];
    into: string[];
    description: string;
}

const ToolTip: React.FC<ToolTipProps> = ({data, name, from, into, description}) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    return (
        <div className="tooltip">
            <h1>{name}</h1>
            <h3>Description</h3>
            <ItemDescription description={description} />
            {from && <h3>Builds From</h3>}
            {from &&
                from.map((fromItem: string, index: number) => (
                    <div key={index}>
                        {data[fromItem] && data[fromItem]["name"]}
                    </div>
                ))}
            {into && <h3>Builds Into</h3>}
            {into &&
                into.map((intoItem: string, index: number) => (
                    <div key={index}>
                        {data[intoItem] && data[intoItem]["name"]}
                    </div>
                ))}
        </div>
    )
}

export default ToolTip