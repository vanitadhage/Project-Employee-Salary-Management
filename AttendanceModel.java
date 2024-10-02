
package Employee.model;

import java.util.Date;

public class AttendanceModel {
	private int eid;
	private Date currentDate;

	private int present;

	public AttendanceModel() {

	}

	public AttendanceModel(int eid, String currentDate, int present) 
	{
		super();
		this.eid = eid;
		currentDate = currentDate;
		this.present = present;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public Date getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(Date date) {
		this.currentDate = date;
	}

	public int getPresent() {
		return present;
	}

	public void setPresent(int present) {
		this.present = present;
	}

}
