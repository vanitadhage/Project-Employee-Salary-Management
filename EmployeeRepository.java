
package Employee.Repositary;
import java.util.*;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.management.modelmbean.ModelMBean;

import AdminPanel.AdminLogin;

import Employee.model.AttendanceModel;
import Employee.model.EmployeeModel;

public class EmployeeRepositary extends DbConfig 
{
	

	public AdminLogin getAdmin()
	{
		try
		{
			AdminLogin admin = null;

			stmt = conn.prepareStatement("select *from admin");

			rs = stmt.executeQuery();

			if (rs.next())
			{
				// aid | userName | Password

				admin = new AdminLogin();

				admin.setAid(rs.getInt("aid"));
				admin.setUsername(rs.getString("username"));
				admin.setPassword(rs.getString("password"));
			}

			if (admin != null) 
			{
				return admin;
			} 
			else
			{
				return null;
			}
		} 
		catch (Exception e) 
		{
			System.out.println("Error Genrate When Fetch Info of Admin Model: " + e);
			return null;
		}

	}

	public boolean addEmployee(EmployeeModel modell) throws SQLException 
	{
		try
		{
		stmt = conn.prepareStatement("insert into emploinfo values(?,?,?,?,?,?,?,?,?)");

		stmt.setInt(1, modell.getEid());
		stmt.setString(2, modell.getEname());
		stmt.setInt(3, modell.getContact());
		stmt.setString(4, modell.getEmail());
		stmt.setString(5, modell.getGender());
		stmt.setString(6, modell.getAdress());
		stmt.setString(7, modell.getUsername());
		stmt.setString(8, modell.getPassword());
		stmt.setInt(9,modell.getPid());

		int value = stmt.executeUpdate();

			if (value>0)
			{
				return true;
			} 
			else 
			{
				return false;
			}
		} 
		catch (Exception ex)
		{
			System.err.println("You Enter already Present Data");
			return false;
		}

	}

	public List<EmployeeModel> showData() {
		try 
		{
			
			List<EmployeeModel> listEmployee = new ArrayList<EmployeeModel>();
			
			stmt = conn.prepareStatement("select * from emploinfo");

			rs = stmt.executeQuery();

			while (rs.next())
			{
				EmployeeModel model = new EmployeeModel();
				model.setEid(rs.getInt(1));
				model.setEname(rs.getString(2));
				model.setContact(rs.getInt(3));
				model.setEmail(rs.getString(4));
				model.setAdress(rs.getString(5));
				model.setGender(rs.getString(6));
				model.setUsername(rs.getString(7));
				model.setPassword(rs.getString(8));
				model.setPid(rs.getInt(9));

				listEmployee.add(model);
			}
			

			return listEmployee.size() > 0 ? listEmployee : null;

		} 
		catch (Exception ex) 
		{
			System.out.println("When Employee Model GetbyName Error is " + ex);
			return null;
		}
	}

	public int deletData(int id)
	{
	try 
		{
			stmt = conn.prepareStatement("delete from emploinfo where eid = ?");
			stmt.setInt(1, id);
			
			return stmt.executeUpdate()>0 ? 1 : 0;
		} 
		catch (SQLException ex)
		{
			System.out.println("Error deleting employee: " + ex.getMessage());
			return 0; 
		}

	}



   public int dataUpdate(EmployeeModel model)
   {
	   try
	   {
		   stmt=conn.prepareStatement("update emploinfo set Ename =? where eid=?");
		   stmt.setInt(2, model.getEid()); 
		   stmt.setString(1,model.getEname());
		   
		   return stmt.executeUpdate()>0?1:0 ;	  
	   }
	   catch(Exception ex)
	   {
		   System.out.println("Error Updating employee: " + ex.getMessage());
	   }
	return 0;
	   
   }
   
   

}
	   
   
