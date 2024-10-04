import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { fetchCampaigns, updateCampaignStatus } from '../redux/reducer/createcampaign/GetCampaignData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Box } from '@mui/material';
import { toast } from 'react-toastify';

const formatDate = (dateString) => {
  if (!dateString) return 'No Date Provided';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const InHouseAllCamp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { campaigns, status, error } = useSelector((state) => state.campaigns);
  const [checkboxState, setCheckboxState] = useState({});

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampaigns());
    }
  }, [dispatch, status]);

  useEffect(() => {
    // Set initial checkbox state based on fetched campaigns
    const initialCheckboxState = {};
    campaigns.forEach((campaign) => {
      initialCheckboxState[campaign._id] = {
        checkbox1: campaign.campaignStatus === 'Completed',
        checkbox2: campaign.campaignStatus === 'Active',
        checkbox3: campaign.campaignStatus === 'New',
        checkbox4: campaign.campaignStatus === 'Expired', // Added this for the 'Expired' checkbox
      };
    });
    setCheckboxState(initialCheckboxState);
  }, [campaigns]);

  const handleCheckboxChange = async (event, campaignId) => {
    const { name, checked } = event.target;

    let newStatus = '';
    if (name === 'checkbox1' && checked) newStatus = 'Completed';
    else if (name === 'checkbox2' && checked) newStatus = 'Active';
    else if (name === 'checkbox3' && checked) newStatus = 'New';
    else if (name === 'checkbox4' && checked) newStatus = 'Expired'; // Ensure this checks for Expired status

    if (newStatus) {
      try {
        await dispatch(updateCampaignStatus({ id: campaignId, status: newStatus }));
        toast.success('Campaign status updated successfully');
      } catch (error) {
        console.error('Error updating campaign status:', error);
      }
    }

    setCheckboxState((prev) => ({
      ...prev,
      [campaignId]: {
        ...prev[campaignId],
        [name]: checked,
      },
    }));
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: '_id',
        header: 'S.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'campaignName',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'campaignCode',
        header: 'Code',
        size: 100,
      },
      {
        accessorKey: 'clientSelect',
        header: 'Enterprise/Agency',
        size: 200,
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
        size: 150,
        Cell: ({ cell }) => formatDate(cell.getValue()),
      },
      {
        accessorKey: 'endDate',
        header: 'End Date',
        size: 150,
        Cell: ({ cell }) => formatDate(cell.getValue()),
      },
      {
        accessorKey: 'campaignStatus',
        header: 'Campaign Status',
        size: 150,
      },
      {
        accessorKey: 'checkboxes',
        header: 'Update Status',
        size: 150,
        Cell: ({ row }) => (
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Checkbox
              name="checkbox1"
              checked={checkboxState[row.original._id]?.checkbox1 || false}
              onChange={(e) => handleCheckboxChange(e, row.original._id)}
              color="primary"
            />
            Completed
            <Checkbox
              name="checkbox2"
              checked={checkboxState[row.original._id]?.checkbox2 || false}
              onChange={(e) => handleCheckboxChange(e, row.original._id)}
              color="secondary"
            />
            Active
            <Checkbox
              name="checkbox3"
              checked={checkboxState[row.original._id]?.checkbox3 || false}
              onChange={(e) => handleCheckboxChange(e, row.original._id)}
              color="success"
            />
            New
            <Checkbox
              name="checkbox4" // Changed this to checkbox4 for Expired
              checked={checkboxState[row.original._id]?.checkbox4 || false}
              onChange={(e) => handleCheckboxChange(e, row.original._id)}
              color="error"
            />
            Expired
          </Box>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <RemoveRedEyeIcon
              onClick={() => navigate(`/campaigns/inhousecampaigns/campaigndetail/${row.original._id}`)}
              style={{ cursor: 'pointer', color: 'dark', marginRight: '15px' }}
            />
            {/* <ModeEditIcon
              onClick={() => alert(`Editing campaign ${row.original._id}`)}
              style={{ cursor: 'pointer', color: 'dark' }}
            /> */}
          </div>
        ),
        size: 150,
      },
    ],
    [checkboxState, navigate]
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return <MaterialReactTable columns={columns} data={campaigns} />;
};

export default InHouseAllCamp;
