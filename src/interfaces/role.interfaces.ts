import { Role } from './user.interfaces';

export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface RoleChangeRequest {
  id: string;
  userId: string;
  newRole: Role;
  status: RequestStatus;
  createdAt: Date;
  updatedAt: Date;
}