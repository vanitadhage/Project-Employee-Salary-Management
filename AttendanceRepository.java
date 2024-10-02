package Employee.Repositary;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.sql.Date;

import Employee.model.AttendanceModel;
import EmployeePanel.EmployeeloginModel;

public class AttendanceRepositary extends DbConfig
{
	   public boolean getLogin(int id) 
	   {
		   try
		   {
			   stmt=conn.prepareStatement("select eid from emploinfo where eid=?");
			   stmt.setInt(1,id);
			   
			   rs=stmt.executeQuery();
			   
			   while(rs.next())
			   {
				   if(id==rs.getInt(1))
				   {
					   return true;
				   }
				   
				   else
				   {
					   return false;
				   }
			   }
			
		   }
		   catch(Exception ex)
		   {
			   System.out.println("Exception id  is "+ex);;
		   }
		return false;
           
	   }
	   
	   
	   
	   
	   public Date fetchdates()
	   {
		   try
		   {
			   stmt=conn.prepareCall("select current_date()");
			   rs=stmt.executeQuery();
			   
			   while(rs.next())
			   {
				   return rs.getDate(1);
			   }
		   }
		   catch(Exception ex)
		   {
			   System.out.println("Exception Date "+ex);
		   }
		   
		   return null;
	   }
	
	   
	   public boolean takeAttendance(int id)
	   {
		   
		  
		   try
		   {
			   boolean b=this.getLogin(id);
			   Date date=this.fetchdates();
			   
			   if(b)
			   {
				   stmt=conn.prepareStatement("insert into attendance values(?,?,?)");
				   
				   stmt.setInt(1,id);
				   stmt.setDate(2, date);
				   
				   System.out.println("Whats the Status......................................... (For Present) 1 or 0   (For Absent)");
				   
				   Scanner sc=new Scanner(System.in);
				   
				   int a=sc.nextInt();
				   
				   if(a==1)
				   {
					   stmt.setInt(3, 1);
				   }
				   else
				   {
					   stmt.setInt(3, 0);
				   }
				   
				   
				 int value=  stmt.executeUpdate();
				 
				 if(value>0)
				 {
					 return true;
				 }
				 else
				 {
					 return false;
				 }
			   }else
			   {
				   System.out.println("Please enter valid id");
				   return false;
			   }
		   }
		   
		   catch(Exception ex)
		   {
			   System.out.println("Exception of attendance"+ex);
			   return false;
		   }
		   
		 
	   }

}
