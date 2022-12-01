import { Measure, Unit } from './../index.js';
export type GravityUnits =
  | GravitySpecificUnits
  | GravityPlatoUnits
  | GravityBrixUnits;
export type GravitySystems = 'specific' | 'brix' | 'plato';
export type GravitySpecificUnits = 'sg';
export type GravityBrixUnits = 'Bx';
export type GravityPlatoUnits =  'P';

const specific: Record<GravitySpecificUnits, Unit> = {
  sg: {
    name: {
      singular: 'Specific Gravity',
      plural: 'Specific Gravity Points',
    },
    to_anchor: 1,
    anchor_shift: 0,
  }
};

const brix: Record<GravityBrixUnits, Unit> = {
    Bx: {
        name: {
            singular: 'degree Brix',
            plural: 'degrees Brix',
        },
        to_anchor: 1,
        anchor_shift: 0,
    }
};

const plato: Record<GravityPlatoUnits, Unit> = {
    P: {
        name: {
            singular: 'degree Plato',
            plural: 'degrees Plato',
        },
        to_anchor: 1,
        anchor_shift: 0,
    }
};

const measure: Measure<GravitySystems, GravityUnits> = {
    systems: {
        specific,
        brix,
        plato
    },
    anchors: {
        plato: {
            specific: {
                transform: function (P: number): number {
                    return 1+(P/(258.6 - ((P/258.2)*227.1)));
                },
            },
            brix: {
                transform: function (P: number): number {
                    return P / 1.04;
                }
            },
        },
        brix: {
            plato: {
                transform: function(Bx: number): number {
                    return 1.04 * Bx;
                }
            },
            specific: {
                transform: function(Bx: number): number {
                    return 1+((1.04*Bx)/(258.6 - (((1.04*Bx)/258.2)*227.1)));
                }
            }
        },
        specific: {
            plato: {
                transform: function(sg: number): number {
                    return (-1 * 616.868) + (1111.14 * sg) - (630.272 * sg*sg) + (135.997 * sg*sg*sg)
                }
            },
            brix: {
                transform: function(sg: number): number {
                    return ((-1 * 616.868) + (1111.14 * sg) - (630.272 * sg*sg) + (135.997 * sg*sg*sg))/1.04;
                }
            }
        }
    }
};

export default measure;
