import { appendTitle, approve, approveSign, breakfast, commanderConclusion, dinner, dishesName, doctorConclusion, emptyDate, forBreakfast, forBreakfastSign, forBreakfastSign2, forDinner, forDinnerSign, forLunch, forLunchSign, formatTitle, lunch, mainSubTitle, mainTitle, numTitle, perPerson, perTeam, productsName, productsPub, productsReceived, shouldBeIssued, signTable, total, underApproveSign, underApproveSign2, underSignTable } from "../dictionary";
import { defaultFont, leftAlignH, centerAlignH, xsmFont, smFont, centerAlignVH, lgFont, defaultBorderStyle } from "./excelHelper";

interface ICellsFormats {
    tableRowStartIndex: number,
    tableRowEndIndex: number,
};

interface ICellsFormatsValues {
    cell: string,
    value: string,
    style: object,
};

export default ({ tableRowStartIndex, tableRowEndIndex }: ICellsFormats): ICellsFormatsValues[] => {
    const rowStart = tableRowStartIndex + 1;
    const rowEnd = tableRowEndIndex + 1;
    
    return  [
    {
        cell: 'F1',
        value: appendTitle,
        style: { 
            font: defaultFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: 'A2',
        value: formatTitle,
        style: { 
            font: defaultFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: 'F3',
        value: approve,
        style: { 
            font: defaultFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: 'F4',
        value: approveSign,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F5',
        value: underApproveSign,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F6',
        value: approveSign,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F7',
        value: underApproveSign2,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F8',
        value: emptyDate,
        style: { 
            font: defaultFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: 'A10',
        value: mainTitle,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A11',
        value: mainSubTitle,
        style: { 
            font: smFont, 
            alignment: centerAlignH
        }
    },
    // {
    //     cell: 'A12',
    //     value: emptyDate,
    //     style: { 
    //         font: smFont, 
    //         alignment: centerAlignH
    //     }
    // },
    // {
    //     cell: 'A13',
    //     value: '', // dynamic cell
    //     style: { 
    //         font: smFont, 
    //         alignment: centerAlignH
    //     }
    // },
    {
        cell: 'A15',
        value: dishesName,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B16',
        value: forBreakfast,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'D16',
        value: forLunch,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'H16',
        value: forDinner,
        style: { 
            font: defaultFont,
            alignment: centerAlignH
        }
    },
    {
        cell: `A${rowStart}`, // Table start
        value: numTitle,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH,
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `B${rowStart}`,
        value: productsName,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH,
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `C${rowStart}`,
        value: shouldBeIssued,
        style: { 
            font: defaultFont,
            alignment: centerAlignH,
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `C${rowStart + 1}`,
        value: breakfast,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: `E${rowStart + 1}`,
        value: lunch,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: `G${rowStart + 1}`,
        value: dinner,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: `I${rowStart + 1}`, // 25
        value: total,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH,
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `C${rowStart + 3}`, // 27
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `D${rowStart + 3}`, // 27
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `E${rowStart + 3}`, // 27
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `F${rowStart + 3}`, // 27
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `G${rowStart + 3}`, // 27
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `H${rowStart + 3}`, // 27
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `I${rowStart + 3}`, // 27
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `J${rowStart + 3}`, // 27
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90},
            border: {
                top: defaultBorderStyle,
                bottom: defaultBorderStyle,
                left: defaultBorderStyle,
                right: defaultBorderStyle,
            }
        }
    },
    {
        cell: `A${rowEnd + 2}`, // after table 59
        value: signTable,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `A${rowEnd + 3}`, // after table 60
        value: underSignTable,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `A${rowEnd + 4}`, // after table 61
        value: signTable,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `A${rowEnd + 5}`, // 62
        value: underSignTable,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `A${rowEnd + 6}`, // 63
        value: emptyDate,
        style: { 
            font: smFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: `A${rowEnd + 7}`, // 64
        value: productsPub,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 7}`, // 64
        value: productsReceived,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 8}`, // 65
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 8}`, // 65
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 9}`, // 66
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 9}`, // 66
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 10}`, // 67
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 10}`, // 67
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 11}`, // 68
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 11}`, // 68
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 12}`, // 69
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 12}`, // 69
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 13}`, // 70
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 13}`, // 70
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 16}`, // 74
        value: doctorConclusion,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 16}`, // 74
        value: commanderConclusion,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 17}`, // 75
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 17}`, // 75
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 18}`, // 76
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 18}`, // 76
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 19}`, // 77
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 19}`, // 77
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 20}`, // 78
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 20}`, // 78
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 21}`, // 79
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 21}`, // 79
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `B${rowEnd + 22}`, // 80
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: `F${rowEnd + 22}`, // 80
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    }
    ];
};