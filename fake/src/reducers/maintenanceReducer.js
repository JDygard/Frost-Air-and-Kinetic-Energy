// Get some data in here
initialState = {
    equipment: [
        {
            id: 1,
            name: 'Air Conditioner',
            lastMaintenanceDate: '2020-01-01',
            needsMaintenance: false,
        },
    ]
}

const maintenanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LAST_MAINTENANCE_DATE':
      const { id, date } = action.payload;
      return {
        ...state,
        equipment: state.equipment.map((eq) =>
          eq.id === id ? { ...eq, lastMaintenanceDate: date } : eq
        ),
      };
    case 'MARK_EQUIPMENT_NEEDS_MAINTENANCE':
      const { equipmentIds } = action.payload;
      return {
        ...state,
        equipment: state.equipment.map((eq) =>
          equipmentIds.includes(eq.id)
            ? { ...eq, needsMaintenance: true }
            : eq
        ),
      };
    // ... add more cases to handle other maintenance-related actions
    default:
      return state;
  }
};

export default maintenanceReducer;