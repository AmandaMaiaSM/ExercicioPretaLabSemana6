export interface Animals {
    id: string;
    created_at: string;
    name: string;
    description: string;
    value: number;
    age: number;
    breed: string;
    color: string;
    status: 'read' | 'unread' | 'donated';
}