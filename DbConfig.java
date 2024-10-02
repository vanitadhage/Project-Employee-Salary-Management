
package Employee.Repositary;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.mysql.cj.jdbc.JdbcPreparedStatement;

public class DbConfig
 {
	protected  Connection conn;
	 protected PreparedStatement stmt;
	 protected ResultSet rs;

	public DbConfig()
	{
	try
	{
		
		com.mysql.cj.jdbc.Driver d=new com.mysql.cj.jdbc.Driver();
		DriverManager.registerDriver(d);
		 conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbcemployee","root","root");
		
	}
catch(Exception ex)
	{
	System.out.println(ex);
	}
	
	}
	
}
