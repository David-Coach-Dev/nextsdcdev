import React from 'react';
import styled from 'styled-components';
export interface DashboardInterface {}

const Dashboard : React.FC<DashboardInterface> = () => {
	return <DashboardStyle>Dashboard</DashboardStyle>;
};

export const DashboardStyle = styled.div``;

export default Dashboard;
