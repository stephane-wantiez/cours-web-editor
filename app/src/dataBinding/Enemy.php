<?php
namespace lib3dduo\casualCrossing\metabot\dataBinding;

use \lib3dduo\database\Database;
use \lib3dduo\database\Data;

class Enemy extends DataBinder{

	public function getData()
	{
		$where = $this->buildWhereClause('enemies', 'e');		
		$data = $this->getDB()->select('e.* FROM enemies e WHERE '.$where);
		return $data;
	}
	
	public function addData($id)
	{
		$data = new Data('enemies');
		$data->addString('name',  $_POST['name']);
		$data->addInt   ('xp',    $_POST['xp']);
		$data->addDouble('scale', $_POST['scale']);
		
		if($id)
		{
			$this->getDB()->update($data, 'id=?', $id);
		}
		else
		{
			$id = $this->getDB()->insert($data);
		}
		
		return $id;
	}
	
	public function deleteData($id)
	{
		$this->getDB()->delete('enemies', 'id=?', $id);
	}
}