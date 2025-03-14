import { appendTitle, approve, approveSign, breakfast, commanderConclusion, dinner, dishesName, doctorConclusion, emptyDate, forBreakfast, forBreakfastSign, forBreakfastSign2, forDinner, forDinnerSign, forLunch, forLunchSign, formatTitle, lunch, mainSubTitle, mainTitle, numTitle, perPerson, perTeam, productsName, productsPub, productsReceived, shouldBeIssued, signTable, total, underApproveSign, underApproveSign2, underSignTable } from "../dictionary";
import { defaultFont, leftAlignH, centerAlignH, xsmFont, smFont, centerAlignVH, lgFont } from "./excelHelper";

export default [
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
    {
        cell: 'A12',
        value: emptyDate,
        style: { 
            font: smFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A13',
        value: '', // dynamic cell
        style: { 
            font: smFont, 
            alignment: centerAlignH
        }
    },
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
        cell: 'A24',
        value: numTitle,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'B24',
        value: productsName,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'C24',
        value: shouldBeIssued,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'C25',
        value: breakfast,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'E25',
        value: lunch,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'G25',
        value: dinner,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'I25',
        value: total,
        style: { 
            font: defaultFont, 
            alignment: centerAlignVH
        }
    },
    {
        cell: 'C27',
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'D27',
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'E27',
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'F27',
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'G27',
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'H27',
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'I27',
        value: perPerson,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'J27',
        value: perTeam,
        style: { 
            font: defaultFont, 
            alignment: { ...centerAlignH, textRotation: 90}
        }
    },
    {
        cell: 'A59', // after table
        value: signTable,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A60',
        value: underSignTable,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A61',
        value: signTable,
        style: { 
            font: defaultFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A62',
        value: underSignTable,
        style: { 
            font: xsmFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'A63',
        value: emptyDate,
        style: { 
            font: smFont, 
            alignment: leftAlignH
        }
    },
    {
        cell: 'A64',
        value: productsPub,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F64',
        value: productsReceived,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B65',
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F65',
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B66',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F66',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B67',
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F67',
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B68',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F68',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B69',
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F69',
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B70',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F70',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B74',
        value: doctorConclusion,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F74',
        value: commanderConclusion,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B75',
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F75',
        value: forBreakfastSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B76',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F76',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B77',
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F77',
        value: forLunchSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B78',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F78',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B79',
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F79',
        value: forDinnerSign,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'B80',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    },
    {
        cell: 'F80',
        value: forBreakfastSign2,
        style: { 
            font: lgFont, 
            alignment: centerAlignH
        }
    }
];