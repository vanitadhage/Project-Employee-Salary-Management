
package Employee.Service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import AdminPanel.AdminLogin;
import Employee.Repositary.EmployeeRepositary;
import Employee.model.AttendanceModel;
import Employee.model.EmployeeModel;


public class EmployeeService 
 {
	
	EmployeeRepositary emp=new EmployeeRepositary( );
	
		public AdminLogin getAdmin()
		{
		
				return emp.getAdmin();
		}
		
		public int addEmployee(EmployeeModel modell) throws SQLException
		{
			return emp.addEmployee(modell)?1:0;
		}

		
		
		public  List<EmployeeModel> showData()
		{
			return emp.showData();
		}
		
		public int deletData(int id4) throws SQLException
		{
			return emp.deletData(id4);
		}
		
		public int dataUpdate(EmployeeModel model)
		{
			return emp.dataUpdate(model);
		}

	
		

 }
