export const mockUsers = [
  { id: 1, name: 'John Doe', role: 'Admin', active: true },
  { id: 2, name: 'Jane Smith', role: 'Editor', active: false },
];

export const mockRoles = [
  { id: 1, name: 'Admin', permissions: ['Create', 'Edit', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Edit', 'Read'] },
];

export const mockPermissions = ['Create', 'Edit', 'Read', 'Delete'];
