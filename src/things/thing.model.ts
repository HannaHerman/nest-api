export interface Thing {
    id: string;
    name: string;
    age: number;
    membership: ThingMembership;
}

export enum ThingMembership {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}